import Image from 'next/image';

interface InfoSectionProps {
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
  subheading?: string;
  descriptions: (string | React.ReactNode)[];
  imagePosition?: 'left' | 'right';
}

export default function InfoSection({
  image,
  alt,
  title,
  subtitle,
  subheading,
  descriptions,
  imagePosition = 'left',
}: InfoSectionProps) {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className={`flex gap-8 ${imagePosition === 'right' ? 'flex-row-reverse' : ''}`}>
          <div className="flex-shrink-0">
            <div className="rounded-2xl border-8 border-gray-200 overflow-hidden inline-block">
              <Image
                src={image}
                alt={alt}
                width={400}
                height={300}
                className="block"
                priority
                style={{ width: '400px', height: '300px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center" style={{ minHeight: 300 }}>
            {subtitle && (
              <h2 className="text-[#0066CC] tracking-[0.2em] text-base">{subtitle}</h2>
            )}
            <h3 className="text-[40px] font-bold">{title}</h3>
            {subheading && (
              <div className="text-base text-gray-500 font-medium mt-1">{subheading}</div>
            )}
            <div className="mt-4">
              {descriptions.map((desc, idx) => (
                <p key={idx} className={`text-lg${idx > 0 ? ' mt-2' : ''}`}>{desc}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 