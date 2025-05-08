'use client';

import Image from 'next/image';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useState } from 'react';
import PageBanner from '@/components/PageBanner';

export default function VoicePage() {
  const [isSecret, setIsSecret] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      {/* Banner Section */}
      <PageBanner
        title="고객의 소리"
        description={[
          "여러분의 소중한 의견을",
          "세강병원이 귀담아 듣겠습니다"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

      {/* Form Section */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <form className="space-y-6">
            {/* Title Field */}
            <div className="grid grid-cols-[150px,1fr] items-center border-b border-gray-200 py-4">
              <label className="font-medium text-gray-700 flex items-center">
                제목
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="제목을 입력하세요."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Name Field */}
            <div className="grid grid-cols-[150px,1fr] items-center border-b border-gray-200 py-4">
              <label className="font-medium text-gray-700 flex items-center">
                이름
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="이름을 입력하세요."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password Field */}
            <div className="grid grid-cols-[150px,1fr] items-center border-b border-gray-200 py-4">
              <label className="font-medium text-gray-700 flex items-center">
                비밀번호
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                  className="w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isSecret}
                    onChange={(e) => setIsSecret(e.target.checked)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>비밀글</span>
                </label>
              </div>
            </div>

            {/* Email Field */}
            <div className="grid grid-cols-[150px,1fr] items-center border-b border-gray-200 py-4">
              <label className="font-medium text-gray-700 flex items-center">
                이메일
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                placeholder="이메일을 입력하세요."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Contact Field */}
            <div className="grid grid-cols-[150px,1fr] items-center border-b border-gray-200 py-4">
              <label className="font-medium text-gray-700 flex items-center">
                연락처
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="tel"
                placeholder="연락처를 입력하세요."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Content Field */}
            <div className="grid grid-cols-[150px,1fr] items-start border-b border-gray-200 py-4">
              <label className="font-medium text-gray-700 flex items-center pt-2">
                상담내용
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="space-y-4">
                <div className="border border-gray-300 rounded-md">
                  {/* Editor Toolbar */}
                  <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-gray-50">
                    <select className="px-2 py-1 border border-gray-300 rounded">
                      <option>글꼴</option>
                    </select>
                    <select className="px-2 py-1 border border-gray-300 rounded">
                      <option>3pt</option>
                    </select>
                    <div className="flex items-center gap-1 border-l border-gray-300 pl-2">
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">가</button>
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">가</button>
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">가</button>
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">가</button>
                    </div>
                    <div className="flex items-center gap-1">
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">B</button>
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">I</button>
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">U</button>
                    </div>
                  </div>
                  {/* Editor Content */}
                  <textarea
                    className="w-full h-[300px] p-4 focus:outline-none"
                    placeholder="내용을 입력하세요."
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Captcha Field */}
            <div className="grid grid-cols-[150px,1fr] items-center border-b border-gray-200 py-4">
              <label className="font-medium text-gray-700 flex items-center">
                보안코드
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/captcha-placeholder.png"
                  alt="보안코드"
                  width={100}
                  height={40}
                  className="border border-gray-300"
                />
                <input
                  type="text"
                  className="w-[200px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                등록하기
              </button>
            </div>

            {/* Privacy Policy Section */}
            <div className="mt-8">
              <div className="text-sm text-gray-600 mb-2">
                아래 개인정보 처리방침을 확인해주세요.
              </div>
              <div className="border border-gray-200 rounded-md">
                <div className="h-[200px] overflow-y-auto p-4 text-sm text-gray-600 bg-gray-50">
                  <div className="space-y-4">
                    <p className="font-medium">개인정보 처리방침</p>
                    <p>
                      세강병원은 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                    </p>
                    <div>
                      <p className="font-medium mb-2">1. 개인정보의 처리목적</p>
                      <p>세강병원은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">2. 개인정보의 처리 및 보유기간</p>
                      <p>① 세강병원은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
                      <p>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">3. 개인정보의 제3자 제공</p>
                      <p>세강병원은 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">4. 정보주체의 권리·의무 및 행사방법</p>
                      <p>① 정보주체는 세강병원에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
                      <p>1. 개인정보 열람요구</p>
                      <p>2. 오류 등이 있을 경우 정정 요구</p>
                      <p>3. 삭제요구</p>
                      <p>4. 처리정지 요구</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="privacyAgree"
                  className="w-4 h-4 text-blue-600"
                  required
                />
                <label htmlFor="privacyAgree" className="text-sm text-gray-700">
                  개인정보 처리방침에 동의합니다.
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
} 