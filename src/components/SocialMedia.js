function SocialMedia({ links }) {
   const { github, linkedin } = links

   return (
      <div>
         <a href={github}>{github}</a> <br></br>
         <a href={linkedin}>{linkedin}</a>
      </div>
   )
}

export default SocialMedia