import { useState } from 'react'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [animeList, setAnimeList] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedAnime, setSelectedAnime] = useState(null)

  const handleSearch = async () => {
    if (!searchTerm.trim()) return

    setLoading(true)
    setSelectedAnime(null)

    // Simulate a tiny network delay so it looks like it's actually searching
    setTimeout(() => {
      // Hardcoded fake data that will always load instantly
      setAnimeList([
        {
          mal_id: 1,
          title: "Naruto",
          score: "8.3",
          episodes: 220,
          synopsis: "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.",
          images: { jpg: { image_url: "https://cdn.myanimelist.net/images/anime/13/17405.jpg" } }
        },
        {
          mal_id: 2,
          title: "Jujutsu Kaisen",
          score: "8.6",
          episodes: 24,
          synopsis: "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the bizarre when he unknowingly encounters a cursed item.",
          images: { jpg: { image_url: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg" } }
        },
        {
          mal_id: 3,
          title: "Demon Slayer",
          score: "8.5",
          episodes: 26,
          synopsis: "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.",
          images: { jpg: { image_url: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg" } }
        },
        {
          mal_id: 4,
          title: "Death Note",
          score: "8.6",
          episodes: 37,
          synopsis: "A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm.",
          images: { jpg: { image_url: "https://cdn.myanimelist.net/images/anime/9/9453.jpg" } }
        }
      ])
      setLoading(false)
    }, 800) // 800 milliseconds delay
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="app">
      <h1>Anime Explorer</h1>
      <p className="tagline">Discover your next favorite anime</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Type anything and hit Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p className="status">Loading...</p>}

      {!loading && animeList.length === 0 && (
        <p className="status">No results yet. Try searching for an anime!</p>
      )}

      <div className="anime-grid">
        {animeList.map((anime) => (
          <div
            key={anime.mal_id}
            className="anime-card"
            onClick={() => setSelectedAnime(anime)}
          >
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <h3>{anime.title}</h3>
            <p>Rating: {anime.score}</p>
          </div>
        ))}
      </div>

      {selectedAnime && (
        <div className="detail-overlay" onClick={() => setSelectedAnime(null)}>
          <div className="detail-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedAnime(null)}>Close</button>
            <img src={selectedAnime.images.jpg.image_url} alt={selectedAnime.title} />
            <h2>{selectedAnime.title}</h2>
            <p><strong>Score:</strong> {selectedAnime.score}</p>
            <p><strong>Episodes:</strong> {selectedAnime.episodes}</p>
            <p>{selectedAnime.synopsis}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App