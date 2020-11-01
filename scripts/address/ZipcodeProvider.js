let zipcodes = []

export const useZipcodes = () => zipcodes.slice()

export const getZipcodes = () => {
  return fetch("http://localhost:8088/entries")
  .then(response => response.json())
  .then(
    parsedZipcodes => {
      zipcodes = parsedZipcodes
    }
  )
}
