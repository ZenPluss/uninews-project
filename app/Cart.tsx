interface Anime {
  id: number;
  title: string;
  image: string;
  episodes: number;
  rating: number;
  description: string;
}

interface AnimeCardProps {
  anime: Anime;
}

export default function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <div className="card">
      <img src={anime.image} alt={anime.title} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{anime.title}</h3>
        <p className="card-desc">{anime.description}</p>
        <div className="flex justify-between items-center">
          <span>{anime.episodes} episodes</span>
          <span>⭐ {anime.rating}</span>
        </div>
        <button className="btn w-full mt-4">View Details</button>
      </div>
    </div>
  );
}