import { trpc } from '../../lib/trpc';

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getIdeas.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>ErrorL {error.message}</span>;
  }

  return (
    <div>
      <h1>Ideanick</h1>

      {data.ideas.map((el) => (
        <div key={el.id}>
          <h2>{el.name}</h2>
          <p>{el.description}</p>
        </div>
      ))}
    </div>
  );
};
