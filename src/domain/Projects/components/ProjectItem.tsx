
interface Props {
  thumbnail:string;
  title:string;
  desc:string;
  period?:string;
  teammate?:string;
  deployUrl?:string;
  youtubeUrl?:string;
}

function ProjectItem({thumbnail, title, desc, period, teammate, deployUrl, youtubeUrl}) {
  return (
    <div>ProjectItem</div>
  )
}
export default ProjectItem