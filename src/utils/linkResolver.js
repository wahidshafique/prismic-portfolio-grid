const linkResolver = ({ node, key, value }) => doc => {
    if (doc.type === "project") {
      return `/project/${doc.uid}`
    }
  
    return `/${doc.uid}`
  }
  
  module.exports = linkResolver