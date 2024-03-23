import Link from "next/link";
import { currentUser } from "@clerk/nextjs";

import { Button } from "../ui/button";

const OurMissionCard = async () => {
  const user = await currentUser();

  return (
    <div>
      <p className='title mb-8 mt-16'>Unsere Mission</p>
      <p className='content mx-auto w-full lg:w-1/2'>
        Willkommen bei ClubVerse – dem Ort, wo Engagement und Organisation auf
        einfache, innovative Weise zusammenkommen. In der Welt der Vereine und
        NGOs zählt jede Hilfe, jede Idee und jede Sekunde. Wir, ein dynamisches
        Team von Studierenden der DHBW Ravensburg, haben ClubVerse ins Leben
        gerufen, um genau diese Welten effizienter, vernetzter und ein bisschen
        leichter zu machen.
        <br />
        <br />
        Unsere Mission? Wir wollen das Rückgrat eurer Leidenschaft sein. Von der
        Mitgliederverwaltung über das Anstoßen von Spendenaufrufen bis hin zur
        Organisation eurer Events – wir sind hier, um die Hürden der Verwaltung
        zu minimieren, damit ihr euch auf das konzentrieren könnt, was wirklich
        zählt: eure Projekte, eure Ziele, euren Impact.
        <br />
        <br /> In einer Zeit, in der Zusammenarbeit und Gemeinschaft wichtiger
        sind denn je, stellt ClubVerse die Werkzeuge bereit, die es braucht, um
        gemeinsam Großes zu bewegen. Wir glauben an die Kraft von Vereinen und
        NGOs, Veränderung zu schaffen, und möchten mit unserer Plattform genau
        dabei unterstützen. Lasst uns gemeinsam die Welt ein Stück besser machen
        – mit Herz, Hingabe und der richtigen Software an eurer Seite.
        <br />
        <br /> <b>Euer ClubVerse-Team</b>
      </p>
      {!user && (
        <Button
          className='mx-auto my-4 flex w-fit border-2'
          variant={"link"}
          asChild
        >
          <Link href={"/sign-in"}>Jetzt deinen Verein registrieren!</Link>
        </Button>
      )}
    </div>
  );
};

export default OurMissionCard;
