import { Search, AlertCircle } from 'lucide-react';
import {
  Button,
  Badge,
  Input,
  Card,
  Divider,
  StatCard,
  ProgressBar,
  Alert,
  EmptyState,
  Heading,
  Text,
  Icon,
} from '@/ui';
import { PageContainer } from '@/components/layout/PageContainer';
import { GovernmentBar } from '@/components/navigation/GovernmentBar';
import { MainHeader } from '@/components/navigation/MainHeader';
import { GovernmentFooter } from '@/components/layout/GovernmentFooter';

const BUTTON_TONES = ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'] as const;
const BUTTON_VARIANTS = ['solid', 'soft', 'ghost', 'outline'] as const;
const BADGE_TONES = ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'] as const;
const ALERT_TONES = ['info', 'success', 'warning', 'error', 'neutral'] as const;

// Full literal class names — Tailwind's content scanner only picks up
// complete strings it can find verbatim in source, not template-interpolated ones.
const PRIMARY_SCALE = [
  { name: '50', twClass: 'bg-pd-primary-50' },
  { name: '100', twClass: 'bg-pd-primary-100' },
  { name: '200', twClass: 'bg-pd-primary-200' },
  { name: '300', twClass: 'bg-pd-primary-300' },
  { name: '400', twClass: 'bg-pd-primary-400' },
  { name: '500', twClass: 'bg-pd-primary-500' },
  { name: '600', twClass: 'bg-pd-primary-600' },
  { name: '700', twClass: 'bg-pd-primary-700' },
  { name: '800', twClass: 'bg-pd-primary-800' },
  { name: '900', twClass: 'bg-pd-primary-900' },
  { name: '950', twClass: 'bg-pd-primary-950' },
];
const SECONDARY_SCALE = [
  { name: '50', twClass: 'bg-pd-secondary-50' },
  { name: '100', twClass: 'bg-pd-secondary-100' },
  { name: '200', twClass: 'bg-pd-secondary-200' },
  { name: '300', twClass: 'bg-pd-secondary-300' },
  { name: '400', twClass: 'bg-pd-secondary-400' },
  { name: '500', twClass: 'bg-pd-secondary-500' },
  { name: '600', twClass: 'bg-pd-secondary-600' },
  { name: '700', twClass: 'bg-pd-secondary-700' },
  { name: '800', twClass: 'bg-pd-secondary-800' },
  { name: '900', twClass: 'bg-pd-secondary-900' },
];
const ACCENT_SCALE = [
  { name: '50', twClass: 'bg-pd-accent-50' },
  { name: '100', twClass: 'bg-pd-accent-100' },
  { name: '200', twClass: 'bg-pd-accent-200' },
  { name: '300', twClass: 'bg-pd-accent-300' },
  { name: '400', twClass: 'bg-pd-accent-400' },
  { name: '500', twClass: 'bg-pd-accent-500' },
  { name: '600', twClass: 'bg-pd-accent-600' },
  { name: '700', twClass: 'bg-pd-accent-700' },
];
const NEUTRAL_SCALE = [
  { name: '0', twClass: 'bg-pd-neutral-0 border-r' },
  { name: '50', twClass: 'bg-pd-neutral-50 border-r' },
  { name: '100', twClass: 'bg-pd-neutral-100 border-r' },
  { name: '200', twClass: 'bg-pd-neutral-200' },
  { name: '300', twClass: 'bg-pd-neutral-300' },
  { name: '500', twClass: 'bg-pd-neutral-500' },
  { name: '700', twClass: 'bg-pd-neutral-700' },
  { name: '900', twClass: 'bg-pd-neutral-900' },
];

function FoundationSection({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border-subtle py-10 first:pt-0 last:border-b-0">
      <Heading level="3" as="h2">
        {title}
      </Heading>
      {description ? (
        <Text variant="muted" size="sm" className="mt-1 max-w-2xl">
          {description}
        </Text>
      ) : null}
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Swatch({ name, twClass, hex }: { name: string; twClass: string; hex?: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border-subtle">
      <div className={`h-14 ${twClass}`} />
      <div className="px-2.5 py-2">
        <p className="text-xs font-semibold text-text-main">{name}</p>
        {hex ? <p className="text-[11px] text-ink">{hex}</p> : null}
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Component Foundation — Prodeskel',
};

export default function FoundationPage() {
  return (
    <>
      <GovernmentBar />
      <MainHeader />
      <main className="bg-app">
        <PageContainer className="py-10">
          <Heading level="1" as="h1">
            Component Foundation
          </Heading>
          <Text variant="muted" className="mt-2 max-w-2xl">
            Referensi internal primitives Prodeskel di atas fondasi NaraUI — dipakai untuk cek konsistensi warna,
            tipografi, dan state komponen sebelum dipakai di halaman. Bukan bagian dari navigasi publik.
          </Text>

          <FoundationSection title="Warna — Primary" description="Skala utama Prodeskel, dipakai untuk aksi utama dan identitas.">
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-11">
              {PRIMARY_SCALE.map((step) => (
                <Swatch key={step.name} name={step.name} twClass={step.twClass} />
              ))}
            </div>
          </FoundationSection>

          <FoundationSection title="Warna — Secondary & Accent" description="Secondary (cyan) untuk data/progres, accent (amber) untuk sorotan.">
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-10">
              {SECONDARY_SCALE.map((step) => (
                <Swatch key={`s-${step.name}`} name={step.name} twClass={step.twClass} />
              ))}
              {ACCENT_SCALE.map((step) => (
                <Swatch key={`a-${step.name}`} name={step.name} twClass={step.twClass} />
              ))}
            </div>
          </FoundationSection>

          <FoundationSection title="Warna — Neutral & Status">
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
              {NEUTRAL_SCALE.map((step) => (
                <Swatch key={`n-${step.name}`} name={step.name} twClass={step.twClass} />
              ))}
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3">
              <Swatch name="Success" twClass="bg-pd-success" />
              <Swatch name="Warning" twClass="bg-pd-warning" />
              <Swatch name="Error" twClass="bg-pd-error" />
              <Swatch name="Info" twClass="bg-pd-info" />
            </div>
          </FoundationSection>

          <FoundationSection title="Tipografi">
            <div className="flex flex-col gap-4">
              <Heading level="display" as="p">
                Display — Prodeskel
              </Heading>
              <Heading level="1" as="p">
                Heading 1 — Data Desa dan Kelurahan
              </Heading>
              <Heading level="2" as="p">
                Heading 2 — Ringkasan Progres Nasional
              </Heading>
              <Heading level="3" as="p">
                Heading 3 — Klasifikasi Wilayah
              </Heading>
              <Text size="lg">Body large — dipakai untuk lead paragraph pada hero.</Text>
              <Text>Body — teks konten standar di seluruh halaman.</Text>
              <Text size="sm" variant="muted">
                Body small / muted — keterangan sekunder.
              </Text>
              <Text size="xs" className="uppercase tracking-wide text-ink">
                Caption — label kecil huruf kapital
              </Text>
            </div>
          </FoundationSection>

          <FoundationSection title="Button" description="Tone × variant, plus disabled dan loading.">
            <div className="flex flex-col gap-4">
              {BUTTON_VARIANTS.map((variant) => (
                <div key={variant}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink">{variant}</p>
                  <div className="flex flex-wrap gap-2">
                    {BUTTON_TONES.map((tone) => (
                      <Button key={tone} tone={tone} variant={variant} size="sm">
                        {tone}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button disabled>Disabled</Button>
                <Button isLoading>Loading</Button>
                <Button size="lg">Large</Button>
                <Button size="sm">Small</Button>
              </div>
            </div>
          </FoundationSection>

          <FoundationSection title="Badge">
            <div className="flex flex-col gap-3">
              {(['solid', 'soft', 'outline'] as const).map((variant) => (
                <div key={variant} className="flex flex-wrap gap-2">
                  {BADGE_TONES.map((tone) => (
                    <Badge key={tone} tone={tone} variant={variant}>
                      {tone}
                    </Badge>
                  ))}
                </div>
              ))}
            </div>
          </FoundationSection>

          <FoundationSection title="Input" description="Default, dengan ikon, error, dan disabled.">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Input placeholder="Default" aria-label="Default" />
              <Input placeholder="Cari..." leadingIcon={<Icon icon={Search} size="sm" aria-hidden="true" />} aria-label="Dengan ikon" />
              <Input placeholder="Error" error aria-label="Error" defaultValue="Data tidak valid" />
              <Input placeholder="Disabled" disabled aria-label="Disabled" />
            </div>
          </FoundationSection>

          <FoundationSection title="Card & StatCard">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <Text weight="semibold">Card default</Text>
                <Text variant="muted" size="sm" className="mt-1">
                  Border tipis, tanpa shadow berlebih.
                </Text>
              </Card>
              <Card hoverable>
                <Text weight="semibold">Card hoverable</Text>
                <Text variant="muted" size="sm" className="mt-1">
                  Arahkan kursor untuk melihat elevasi.
                </Text>
              </Card>
              <StatCard label="Contoh Statistik" value="1.234" hint="Keterangan" tone="primary" />
              <StatCard label="Dengan Tren" value="85,4%" trend="up" trendValue="+2,1%" tone="success" />
            </div>
          </FoundationSection>

          <FoundationSection title="Progress Bar">
            <div className="flex max-w-md flex-col gap-4">
              <ProgressBar value={72} tone="primary" label="Primary 72%" />
              <ProgressBar value={45} tone="accent" label="Accent 45%" />
              <ProgressBar value={90} tone="success" label="Success 90%" />
              <ProgressBar tone="info" label="Indeterminate" />
            </div>
          </FoundationSection>

          <FoundationSection title="Alert">
            <div className="flex flex-col gap-3">
              {ALERT_TONES.map((tone) => (
                <Alert key={tone} tone={tone} title={`Alert — ${tone}`}>
                  Contoh pesan alert dengan tone {tone}.
                </Alert>
              ))}
            </div>
          </FoundationSection>

          <FoundationSection title="Empty & Error state" description="Untuk panel data kosong atau pencarian gagal.">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Card>
                <EmptyState
                  icon={<Icon icon={Search} size="lg" aria-hidden="true" />}
                  title="Belum ada data"
                  description="Wilayah yang kamu cari belum memiliki data pada periode ini."
                  action={<Button size="sm" variant="outline">Reset Pencarian</Button>}
                />
              </Card>
              <Card>
                <EmptyState
                  icon={<Icon icon={AlertCircle} size="lg" aria-hidden="true" />}
                  title="Gagal memuat data"
                  description="Terjadi kendala saat mengambil data. Coba muat ulang halaman."
                  action={<Button size="sm">Muat Ulang</Button>}
                />
              </Card>
            </div>
          </FoundationSection>

          <Divider className="my-2" />
          <Text size="xs" variant="muted" className="pb-4 pt-4">
            Halaman internal — tidak ditautkan dari navigasi publik.
          </Text>
        </PageContainer>
      </main>
      <GovernmentFooter />
    </>
  );
}
