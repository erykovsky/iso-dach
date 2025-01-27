import type { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function BenefitCard({
  icon: Icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="p-6">
        <div className="flex items-center justify-center w-16 h-16 bg-[#32CD32] rounded-full mb-4">
          <Icon className="w-8 h-8 text-white" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-semibold mb-2 text-[#800020]">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
