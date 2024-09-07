import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import styles from '../../styles/Font.module.css';

export default function Index() {
  return (
    <main className="container max-h-[calc(100vh-10rem)] mx-auto lg:max-w-screen-2xl overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-neutral-300 scrollbar-thumb-rounded-full">
      <div className="p-4 bg-white mt-2 rounded-lg">
        <div className="w-full p-1">
          <h1 className="text-3xl text-neutral-900 text-left">
            Selamat Datang di San.EQuran: Journey Through Faith
          </h1>

          <section className="text-neutral-900 mt-10 text-justify">
            <p className={`${styles.quicksandParagraph}`}>
              Temukan kedamaian, kebijaksanaan, dan panduan spiritual melalui
              Al-Qur'an dengan San.EQuran. Aplikasi kami dirancang untuk
              membantu Anda dalam menjelajahi ayat-ayat suci, memahami makna
              yang mendalam, dan memperkuat iman. Dengan antarmuka yang mudah
              digunakan dan fitur yang lengkap, SanQuran menjadi sahabat setia
              dalam perjalanan spiritual Anda. Nikmati akses cepat ke berbagai
              Surah, doa harian, serta konten Islami yang memperkaya
              pengetahuan dan ketenangan jiwa.
            </p>

            <h3 className={`mt-3 ${styles.quicksandParagraph} font-bold`}>
              Fitur Unggulan :
            </h3>

            <Accordion>
              <AccordionItem
                key="1"
                aria-label="Surah Lengkap"
                title="Surah Lengkap"
                className={`${styles.accordionHeader} ${styles.accordionSubHeader}`}
              >
                Akses semua Surah Al-Qur'an dengan terjemahan dan tafsir.
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Doa Harian"
                title="Doa Harian"
                className={`${styles.accordionHeader} ${styles.accordionSubHeader}`}
              >
                Koleksi doa yang bisa membantu menenangkan hati dan memohon
                keberkahan.
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Pencarian Cepat"
                title="Pencarian Cepat"
                className={`${styles.accordionHeader} ${styles.accordionSubHeader}`}
              >
                Temukan Surah atau ayat dengan mudah melalui fitur pencarian
                canggih kami.
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Blog & Forum Islami"
                title="Blog & Forum Islami"
                className={`${styles.accordionHeader} ${styles.accordionSubHeader}`}
              >
                Baca artikel bermanfaat dan diskusikan topik spiritual bersama
                komunitas Muslim lainnya.
              </AccordionItem>
            </Accordion>

            <p className={`mt-3 ${styles.quicksandParagraph} font-bold`}>
              Saran dan masukan dapat disampaikan ke{' '}
              <a
                href="mailto:sandisaputra2332@gmail.com"
                className="font-bold text-[#3e77ff] underline"
              >
                equran.id@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
