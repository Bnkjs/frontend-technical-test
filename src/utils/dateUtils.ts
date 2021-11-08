import moment from "moment"

export const timestampToDate = (timestamp) => {
  return moment.unix(timestamp).format("MMMM Do YYYY, HH:mm ")
}

export const currentDate = moment().unix()