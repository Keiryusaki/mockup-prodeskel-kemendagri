import { Phone, Mail, Clock } from 'lucide-react';
import { Card, Heading, Button } from '@/ui';
import { MaterialSymbol } from '@/ui/MaterialSymbol';

export interface HelpCenterCardProps {
  phone: string;
  email: string;
  hours: string;
}

export function HelpCenterCard({ phone, email, hours }: HelpCenterCardProps) {
  return (
    <Card compact className="prodeskel-information-card h-full">
      <div className="grid h-full grid-cols-[52px_minmax(0,1fr)] gap-3">
        <div className="flex justify-center pt-0.5">
          <MaterialSymbol name="support_agent" className="shrink-0 text-5xl text-pd-info" />
        </div>
        <div className="flex min-w-0 flex-col">
          <Heading level="6" as="h3">
            Kontak / Help Center
          </Heading>
          <ul className="mt-2.5 flex flex-1 flex-col gap-1.5 text-xs leading-5 text-ink">
            <li className="flex items-center gap-2">
              <Phone size={15} className="shrink-0" aria-hidden="true" />
              <span>{phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="shrink-0" aria-hidden="true" />
              <span>{email}</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={15} className="shrink-0" aria-hidden="true" />
              <span>{hours}</span>
            </li>
          </ul>
          <div className="mt-auto pt-3">
            <Button size="sm" variant="outline" className="!h-8">
              Ajukan Pertanyaan
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
