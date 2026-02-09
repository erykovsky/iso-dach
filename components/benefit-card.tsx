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
    <div className="marketing-tile reveal-up">
      <div className="p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#32CD32] mb-4 shadow-[0_16px_30px_-20px_rgba(50,205,50,0.95)]">
          <Icon className="w-8 h-8 text-white" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-semibold mb-2 text-[#800020]">{title}</h2>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
