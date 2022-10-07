import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage({ events }) {
  const router = useRouter();

  function findsEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All events</title>
        <meta 
          name="description" 
          content="Find a lot of great events that allow you to evolve..." 
        />
      </Head>
      <EventsSearch onSearch={findsEventHandler} />
      <EventList items={events} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events
    },
    revalidate: 60
  }
}

export default AllEventsPage;
