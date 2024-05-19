 // userInfo.js
 /**
 * Function for creatiing user profiles.
 * @param {string[]} names
 * @param {string[]} modNames
 * @returns {Object[]} 
 */
function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => ({
      originalName: name,
      modifiedName: modifiedNames[index],
      id: index + 1
    }));
  }

 
   
  