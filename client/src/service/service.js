export async function fetchPosts() {
  let x = 12
  try {

    const response = await fetch(`http://localhost:3001/user/${x}`)


    return await response.json();
  } catch (error) {
    return [];
  }

}


export async function fetchSession() {
  try {

    const response = await
      fetch(`http://localhost:3001/user/12/average-sessions`)


    return await response.json();
  } catch (error) {
    return [];
  }

}


export async function fetchPerformance() {
  try {

    const response = await
      fetch(`http://localhost:3001/user/12/performance`)


    return await response.json();
  } catch (error) {
    return [];
  }

}


