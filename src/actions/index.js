export const toggleWatched = (seasonKey, episode) => {
  return {
    type: 'TOGGLE_WATCHED',
    seasonKey
  }
}

export const setCurrentSeason = (on) => {
  return {
    type: 'SET_CURRENT_SEASON',
    on
  }
}
