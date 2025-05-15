'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

interface Doctor {
  id: number;
  name: string;
  department: string;
  position: string;
  field: string;
  treatment: string[];
  biography: string[];
  thesis: string[];
  note: string;
  imageUrl: string | null;
  useyn: 'Y' | 'N';
}

const departments = ['내과', '외과', '신경외과', '영상의학과', '마취통증의학과'] as const;
const treatments = [
  '대장항문센터',
  '소화기내시경센터',
  '건강증진센터',
  '유방갑상선센터',
  '내과질환센터',
  '클리닉센터',
  '세로움수액센터',
  '세로움비만센터'
] as const;

export default function EditDoctorPage() {
  const params = useParams();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [formData, setFormData] = useState<Doctor>({
    id: 0,
    name: '',
    department: '내과',
    position: '',
    field: '',
    treatment: [],
    biography: [''],
    thesis: [''],
    note: '',
    imageUrl: null,
    useyn: 'Y'
  });

  // 의료진 정보 가져오기
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`/api/admin/doctors/${params.id}`);
        if (!response.ok) {
          throw new Error('의료진 정보를 가져오는데 실패했습니다.');
        }
        const data = await response.json();
        setFormData(data);
        if (data.imageUrl) {
          setPreviewUrl(data.imageUrl);
        }
      } catch (error) {
        console.error('Error fetching doctor:', error);
        setError('의료진 정보를 가져오는데 실패했습니다.');
      }
    };

    fetchDoctor();
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTreatmentChange = (treatment: string) => {
    setFormData(prev => ({
      ...prev,
      treatment: prev.treatment.includes(treatment)
        ? prev.treatment.filter(t => t !== treatment)
        : [...prev.treatment, treatment]
    }));
  };

  const handleBiographyChange = (index: number, value: string) => {
    const newBiography = [...formData.biography];
    newBiography[index] = value;
    setFormData(prev => ({ ...prev, biography: newBiography }));
  };

  const addBiographyField = () => {
    setFormData(prev => ({ ...prev, biography: [...prev.biography, ''] }));
  };

  const removeBiographyField = (index: number) => {
    setFormData(prev => ({
      ...prev,
      biography: prev.biography.filter((_, i) => i !== index)
    }));
  };

  const handleThesisChange = (index: number, value: string) => {
    const newThesis = [...formData.thesis];
    newThesis[index] = value;
    setFormData(prev => ({ ...prev, thesis: newThesis }));
  };

  const addThesisField = () => {
    setFormData(prev => ({ ...prev, thesis: [...prev.thesis, ''] }));
  };

  const removeThesisField = (index: number) => {
    setFormData(prev => ({
      ...prev,
      thesis: prev.thesis.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      
      // 기본 정보 추가
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formDataToSend.append(key, JSON.stringify(value));
        } else if (value !== null) {
          formDataToSend.append(key, value.toString());
        }
      });

      // 파일 추가
      if (selectedFile) {
        formDataToSend.append('file', selectedFile);
      }

      const response = await fetch(`/api/admin/doctors/${params.id}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || '의료진 수정에 실패했습니다.');
      }

      router.push('/admin/doctors');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : '의료진 수정에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (error) {
    return (
      <div className="container mx-auto py-6">
        <div className="p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">의료진 정보 수정</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
              진료과
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
              직책
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="field" className="block text-sm font-medium text-gray-700 mb-1">
              전문분야
            </label>
            <input
              type="text"
              id="field"
              name="field"
              value={formData.field}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            진료과목
          </label>
          <div className="flex flex-wrap gap-2">
            {treatments.map(treatment => (
              <label key={treatment} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.treatment.includes(treatment)}
                  onChange={() => handleTreatmentChange(treatment)}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2">{treatment}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            주요약력
          </label>
          {formData.biography.map((bio, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={bio}
                onChange={(e) => handleBiographyChange(index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => removeBiographyField(index)}
                className="px-3 py-2 text-red-500 hover:text-red-600"
              >
                삭제
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addBiographyField}
            className="mt-2 px-4 py-2 text-blue-500 hover:text-blue-600"
          >
            + 약력 추가
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            학회논문
          </label>
          {formData.thesis.map((paper, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={paper}
                onChange={(e) => handleThesisChange(index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => removeThesisField(index)}
                className="px-3 py-2 text-red-500 hover:text-red-600"
              >
                삭제
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addThesisField}
            className="mt-2 px-4 py-2 text-blue-500 hover:text-blue-600"
          >
            + 논문 추가
          </button>
        </div>

        <div>
          <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">
            비고
          </label>
          <textarea
            id="note"
            name="note"
            value={formData.note}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            프로필 이미지
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {previewUrl && (
            <div className="mt-2">
              <Image
                src={previewUrl}
                alt="미리보기"
                width={200}
                height={200}
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        <div>
          <label htmlFor="useyn" className="block text-sm font-medium text-gray-700 mb-1">
            사용여부
          </label>
          <select
            id="useyn"
            name="useyn"
            value={formData.useyn}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Y">활성</option>
            <option value="N">비활성</option>
          </select>
        </div>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            취소
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isSubmitting ? '저장 중...' : '저장'}
          </button>
        </div>
      </form>
    </div>
  );
} 