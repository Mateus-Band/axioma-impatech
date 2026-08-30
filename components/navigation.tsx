import {
  Home,
  UserCheck,
  Info,
  Workflow,
  Mail,
  ArrowDownToLine,
  LucideIcon,
} from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Início', icon: Home },
  { id: 'about', label: 'Sobre', icon: Info },
  
  { id: 'eligibility', label: 'Elegibilidade', icon: UserCheck },
  { id: 'contact', label: 'Contato', icon: Mail },
  { id: 'footer', label: 'Rodapé', icon: ArrowDownToLine },
];