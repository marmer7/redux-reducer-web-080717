export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      let friends = state.friends.slice(0);
      friends.push(action.friend);
      return { friends };
    case "REMOVE_FRIEND":
      friends = state.friends.filter(friend => friend.id !== action.id);
      return { friends };
    default:
      return state;
  }
}
