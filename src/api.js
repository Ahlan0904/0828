import { supabase } from './supabaseClient';

export const fetchEvents = async () => {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching events:', error);
    return [];
  }
  return data;
};

export const insertEvent = async (task) => {
  const { error } = await supabase
    .from('todos')
    .insert({ task });

  if (error) {
    console.error('Error inserting event:', error);
  }
};

export const onNewEvent = (callback) => {
  const channel = supabase.channel('todos');
  channel
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'todos' }, payload => {
      console.log('Change received!', payload);
      callback(payload.new);
    })
    .subscribe();
};
