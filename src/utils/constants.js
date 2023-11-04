export const userProfileimage =
  "https://occ-0-3779-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229";

export const tmdbapinowplaying =
  "https://api.themoviedb.org/3/movie/now_playing?&page=1";
export const tmdbapipopular =
  "https://api.themoviedb.org/3/movie/popular?&page=1";
export const tmdbapitop =
  "https://api.themoviedb.org/3/movie/top_rated?&page=1";

export const tmdbapiaction = `https://api.themoviedb.org/3/discover/movie?${process.env.REACT_APP_TMDB_READ_ONLY_KEY}&with_genres=28`;
export const tmdbapihorror = `https://api.themoviedb.org/3/discover/movie?${process.env.REACT_APP_TMDB_READ_ONLY_KEY}&with_genres=27`;
export const tmdbapiadventure = `https://api.themoviedb.org/3/discover/movie?${process.env.REACT_APP_TMDB_READ_ONLY_KEY}&with_genres=12`;
export const tmdbapithriller = `https://api.themoviedb.org/3/discover/movie?${process.env.REACT_APP_TMDB_READ_ONLY_KEY}&with_genres=53`;

export const tmdbgetoptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_READ_ONLY_KEY,
  },
};

export const tmdbapivid = "https://api.themoviedb.org/3/movie/";

export const tmdbimageurl = "https://image.tmdb.org/t/p/w500/";

export const tmdbapisearch = "https://api.themoviedb.org/3/search/movie?query=";
