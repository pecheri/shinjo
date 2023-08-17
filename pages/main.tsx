import { Fragment } from 'react';
import { Header } from '../components/Header';
import { Calender } from '../components/icons/Calender';

const SAMPLE_DATA = [
  { name: 'Ryo', city: 'Los Angeles, USA (PST)', timezone: 'America/Los_Angeles' },
  { name: 'Mori', city: 'Tokyo, Japan (JST)', timezone: 'Asia/Tokyo' },
  { name: 'Kura', city: 'Stockholm, Sweden (CET)', timezone: 'Europe/Stockholm' },
  { name: 'Kevin', city: 'Los Angeles, USA (PST)', timezone: 'America/Los_Angeles' },
  { name: 'Mahomaho', city: 'Stockholm, Sweden (CET)', timezone: 'Europe/Stockholm' },
];

export default function Main() {
  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
  return (
    <div className="min-h-screen">
      <Header />
      <main className="px-7">
        <div
          className="grid grid-cols-4 items-center w-full gap-5"
          style={{
            gridTemplateColumns: 'fit-content(260px) fit-content(140px) 1fr',
          }}
        >
          <div className="col-span-1 col-start-2 row-start-1">
            <p className="underline font-semibold">Current Time</p>
          </div>
          <div className="col-span-1 col-start-3 row-start-1">
            <Calender tailwind="w-7 h-7 fill-bg-black-text" />
          </div>
          {SAMPLE_DATA.map((data, i) => (
            <Fragment key={`${data.name}-${i}`}>
              <div
                className="col-span-1 col-start-1 flex items-center space-x-2"
                style={{ gridRowStart: i + 2 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#FF4D00] col-span-1 col-start-1"></div>
                <div>
                  <p className="font-semibold text-lg">{data.name}</p>
                  <p className="font-medium">{data.city}</p>
                </div>
              </div>
              <div className="col-span-1 col-start-2" style={{ gridRowStart: i + 2 }}>
                <p>Wed Dec 21</p>
                <p>10:52PM</p>
              </div>
              <div className="col-span-1 col-start-3" style={{ gridRowStart: i + 2 }}>
                <div className="w-full h-1 bg-[#C7C7C7]"></div>
              </div>
            </Fragment>
          ))}
        </div>
      </main>
    </div>
  );
}
