# PROJECT

## TECHNOLOGIES

- HTML
- CSS
- JS app
  - [fetch from] API TMDB
  - [save to] `localStorage`

## WORKLOAD
- Mateusz: Store
- Dominik: View
- Mari: ApiMovies
- Jakub: CSS movie-modal, CSS movie-poster, CSS movies
- Beniamin: DOCS, data structure, ..
- Marcin: pagination
- Mateusz: pagination
- Piotr: Trello (SM), CSS footer, CSS header

## COLLECTIONS (DATA)

1. Movies
   1. Movie `{id, title, poster, description, ...}`
2. User (with Library) or Library
   ```js
    // user
    { 
      id, 
      name,
      libraryPage: "queue"|"watched",
      library: [ 
        { 
          movieId, 
          status: "queued"|"watched"
        } 
      ] 
    } 

    // OR

    // library
    [ 
     { 
       movieId, 
       status: "queued"|"watched"
     } 
   ] 
   ```
