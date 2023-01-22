let userId = 12;

/**
 * 
 * This function fetches user by id
 *
 * @returns {json} - A user data
 */
export async function fetchPosts() {
  try {

    const response = await fetch(`http://localhost:8000/user/${userId}/`)


    return await response.json();
  } catch (error) {
    return [];
  }

}

/**
 * it fetches user average session
 * @returns {json} - User average session json
 */
export async function fetchSession() {
  try {

    const response = await
      fetch(`http://localhost:8000/user/${userId}/average-sessions`)


    return await response.json();
  } catch (error) {
    return [];
  }

}

/**
 * it fetches user performance
 * @returns {json} User performance json
 */
export async function fetchPerformance() {
  try {

    const response = await
      fetch(`http://localhost:8000/user/${userId}/performance`)


    return await response.json();
  } catch (error) {
    return [];
  }

}

/**
 * it fetches user activity
 * @returns {json} - User activity json
 */
export async function fetchActivity() {
  try {

    const response = await
      fetch(`http://localhost:8000/user/${userId}/activity`)


    return await response.json();
  } catch (error) {
    return [];
  }

}


