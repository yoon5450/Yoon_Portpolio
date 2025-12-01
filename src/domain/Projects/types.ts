export interface ProjectType {
  thumbnail: string;
  title: string;
  desc: string;
  period: string;
  teammate: string;
  background?: string;
  skills?: string[];
  charged?: { title: string; desc: string }[];
  deployStatus?: string;
  deployUrl?: string;
  youtubeUrl?: string;
}

export interface ProjectDetail {
  thumbnail: string;
  title: string;
  desc: string;
  period: string;
  teamFlag?: string[];
  architecture?: string;
  teammate: string;
  background?: string;
  skills?: string[];
  skillReason?: { skill: string; reason: string }[];
  charged?: { title: string; desc: string }[];
  achievements?: string[];
  troubleShootings?: {
    title: string;
    thumnail?: string;
    background: string;
    solution: string;
    result: string;
  }[];
  deployStatus?: string;
  deployUrl?: string;
  youtubeUrl?: string;
  tistoryUrl?: string;
}
