import { Headphones, Phone, Mail, Clock } from 'lucide-react';
import { Card, Heading, Button } from '@/ui';

export interface HelpCenterCardProps {
  phone: string;
  email: string;
  hours: string;
}

export function HelpCenterCard({ phone, email, hours }: HelpCenterCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-center gap-2.5">
        <Headphones size={18} className="shrink-0 text-primary" aria-hidden="true" />
        <Heading level="5" as="h3">
          Kontak / Help Center
        </Heading>
      </div>
      <ul className="mt-3 flex flex-1 flex-col gap-2 text-sm text-ink">
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
      <Button size="sm" variant="outline" className="mt-4 self-start">
        Ajukan Pertanyaan
      </Button>
    </Card>
  );
}
