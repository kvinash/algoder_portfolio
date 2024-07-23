import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://x.com/KVNASHKAPIL',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/giant.coder/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/algoder/',
    icon: FaLinkedin,
  },
  // {
  //   label: 'StackOverflow',
  //   href: 'https://stackoverflow.com/users/3867490/keysl',
  //   icon: FaStackOverflow,
  // },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/@giant.coders',
    icon: FaYoutube,
  },
  {
    label: 'Github',
    href: 'https://github.com/kvinash/',
    icon: FaGithub,
  },
  // {
  //   label: 'Dev.to',
  //   href: 'https://dev.to/klawingco',
  //   icon: FaDev,
  // },
]
