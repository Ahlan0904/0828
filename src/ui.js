const eventsList = document.getElementById('events-list');
const allEventsList = document.getElementById('all-events-list');
const allEventsContainer = document.getElementById('all-events-container');

export const renderEvents = (events) => {
  eventsList.innerHTML = ''; // Clear the list
  const recentEvents = events.slice(0, 5);
  recentEvents.forEach(event => {
    const li = document.createElement('li');
    li.textContent = `Event: ${event.task} at ${new Date(event.created_at).toLocaleString()}`;
    eventsList.appendChild(li);
  });
};

export const renderAllEvents = (events) => {
    allEventsList.innerHTML = ''; // Clear the list
    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = `Event: ${event.task} at ${new Date(event.created_at).toLocaleString()}`;
        allEventsList.appendChild(li);
    });
};


export const addEventToList = (event) => {
    const li = document.createElement('li');
    li.textContent = `Event: ${event.task} at ${new Date(event.created_at).toLocaleString()}`;
    eventsList.prepend(li);
    if (eventsList.children.length > 5) {
        eventsList.lastChild.remove();
    }
};

export const toggleAllEvents = () => {
    if (allEventsContainer.style.display === 'none') {
        allEventsContainer.style.display = 'block';
    } else {
        allEventsContainer.style.display = 'none';
    }
};