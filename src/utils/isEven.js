/**
 * Check if you like cats
 *
 * @param {boolean} [likes = false] - id checkbox
 * @param {boolean} [allergic = false] - id checkbox
 * @param {boolean} [owns = false] - id checkbox
 * @returns {string} - advice to the cats
 */

export function aboutCats(likes = false, allergic = false, owns = false) {
    let result = '';
    likes && allergic && owns
        ? (result = 'replace your cat with a stuffed animal')
        : likes && allergic && !owns
          ? (result = 'make a friend who has a cat')
          : likes && !allergic && owns
            ? (result = 'you are doing great')
            : likes && !allergic && !owns
              ? (result = 'get a cat')
              : !likes && allergic && owns
                ? (result = 'rethink your life choices')
                : !likes && allergic && !owns
                  ? (result = 'you are doing great')
                  : !likes && !allergic && owns
                    ? (result = 'you could be doing worse')
                    : // result = !likes && !allergic && !owns
                      'you are doing great';
    return result;
}
