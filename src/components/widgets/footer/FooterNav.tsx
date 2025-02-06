import { paths } from '@/components/app/paths';
import Link from 'next/link';

type NavSection = {
  title: string;
  links: { text: string; href: string }[];
};

const navSections: NavSection[] = [
  {
    title: 'Карта сайта',
    links: [
      { text: 'Главная', href: paths.home },
      { text: 'Аренда жилья', href: paths['house-rent'] },
      { text: 'Аренда транспорта', href: paths['car-rent'] },
      { text: 'Туры и экскурсии', href: paths['tours-excursions'] },
      { text: 'Отдых и развлечения', href: paths['leisure-entertainment'] },
      { text: 'Личный кабинет', href: paths['my-account'] },
    ],
  },
  {
    title: 'Стать партнёром',
    links: [
      { text: 'О компании', href: paths.about },
      { text: 'Контакты', href: paths.contact },
      { text: 'Юридическая информация', href: paths['law-information'] },
    ],
  },
];

export const FooterNav: React.FC = () => (
  <div className="flex flex-col gap-8 md:flex-row lg:gap-12">
    {navSections.map((section, index) => (
      <div key={index}>
        <h4 className="mb-2 text-lg font-semibold text-blue-tur">
          {section.title}
        </h4>
        <ul className="space-y-2 text-xl text-dark-grey-tur">
          {section.links.map((link, idx) => (
            <li key={idx}>
              <Link
                className="hover:text-blue-tur hover:underline"
                key={idx}
                href={link.href}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
