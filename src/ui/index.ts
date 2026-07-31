/**
 * Adapter layer over @bynara-id/ui (Nara DS) + @bynara-id/icons. Pages and
 * domain components must import primitives from here, never reach into
 * @bynara-id/* directly — keeps a future rebrand to a one-file change.
 */
export {
  Button,
  Card,
  Input,
  Badge,
  Divider,
  Tooltip,
  StatCard,
  Timeline,
  TimelineItem,
  ProgressBar,
  Avatar,
  EmptyState,
  Breadcrumb,
  Alert,
  Footer,
  Topbar,
  TopbarNav,
  Box,
  Stack,
  Inline,
  Container,
  Grid,
  Text,
  Heading,
  Spinner,
  Skeleton,
  LangToggle,
  // Nara has no standalone "Dropdown" — Menu is its equivalent primitive.
  Menu as Dropdown,
  MenuTrigger as DropdownTrigger,
  MenuPanel as DropdownPanel,
  MenuItem as DropdownItem,
  MenuSeparator as DropdownSeparator,
  MenuLabel as DropdownLabel,
} from '@bynara-id/ui';

export type {
  ButtonProps,
  ButtonTone,
  ButtonSize,
  ButtonVariant,
  CardProps,
  InputProps,
  BadgeProps,
  BadgeTone,
  DividerProps,
  TooltipProps,
  StatCardProps,
  StatCardTone,
  StatCardTrend,
  TimelineItemProps,
  TimelineTone,
  ProgressBarProps,
  ProgressTone,
  AvatarProps,
  EmptyStateProps,
  BreadcrumbItem,
  AlertProps,
  AlertTone,
  FooterProps,
  FooterColumn,
  TopbarProps,
  TopbarNavItem,
  BoxProps,
  StackProps,
  GridProps,
  TextProps,
  HeadingProps,
  HeadingLevel,
} from '@bynara-id/ui';

export {
  Icon,
  Search,
  Menu,
  X,
  ChevronDown,
  Globe,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Database,
} from '@bynara-id/icons';
export type { IconProps } from '@bynara-id/icons';

export { IconButton } from './IconButton';

export { useLang } from '@bynara-id/hooks';
export type { Lang } from '@bynara-id/hooks';
