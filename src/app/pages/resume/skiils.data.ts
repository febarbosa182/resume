export interface Skill {
  name: string;
  description: string;
  level: string;
  icon?: any;
}

export const skills: Skill[] = [
  {
    name: "AWS",
    description: "fbr.skill.aws",
    level: "100",
    icon: ["fab", "aws"]
  },
  {
    name: "GCP",
    description: "fbr.skill.gpc",
    level: "80",
    icon: ["fab", "google"]
  },
  {
    name: "Azure",
    description: "fbr.skill.azure",
    level: "70",
    icon: ["fab", "microsoft"]
  },
  {
    name: "Kubernetes",
    description: "fbr.skill.kubernetes",
    level: "90",
    icon: ["fas", "dharmachakra"]
  },
  {
    name: "Terraform",
    description: "fbr.skill.terraform",
    level: "90",
    icon: ["fas", "code"]
  },
  {
    name: "Ansible",
    description: "fbr.skill.ansible",
    level: "90",
    icon: ["fas", "code"]
  },
  {
    name: "Helm",
    description: "fbr.skill.helm",
    level: "100",
    icon: ["fas", "dharmachakra"]
  },
  {
    name: "Docker",
    description: "fbr.skill.docker",
    level: "100",
    icon: ["fab", "docker"]
  },
  {
    name: "NodeJs",
    description: "fbr.skill.nodejs",
    level: "90",
    icon: ["fab", "node-js"]
  },
  {
    name: "Angular",
    description: "fbr.skill.angular",
    level: "90",
    icon: ["fab", "angular"]
  },
  {
    name: "Java",
    description: "fbr.skill.java",
    level: "70",
    icon: ["fab", "java"]
  }
];
