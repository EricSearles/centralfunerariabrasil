import {
  Building2,
  Clock3,
  FileCheck2,
  Flame,
  Flower2,
  HeartHandshake,
  Home,
  Landmark,
  LucideIcon,
  Package,
  Plane,
  Route,
  ScrollText,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import type { ServiceIconName } from "@/data/services";

export const iconMap: Record<ServiceIconName, LucideIcon> = {
  clock: Clock3,
  home: Home,
  building: Building2,
  sparkles: Sparkles,
  shield: ShieldCheck,
  flower: Flower2,
  package: Package,
  heart: HeartHandshake,
  scroll: ScrollText,
  flame: Flame,
  landmark: Landmark,
  file: FileCheck2,
  users: UsersRound,
  plane: Plane,
  route: Route,
};
