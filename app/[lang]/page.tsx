import { getDictionary } from '@/dictionary';
import { Locale } from '@/i18n';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  const { title } = dictionary.HomePage;

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {title}
    </main>
  );
}
