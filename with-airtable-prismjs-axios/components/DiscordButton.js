import DiscordIcon from '../public/images/social/discord.svg'

export default function DiscordButton() {
  return (
    <a
      href="https://discord.gg/9k2VdPn2FR"
      target="_blank"
      rel="noopener noreferrer"
      className="button secondary discord-cta"
    >
      <span>
        <DiscordIcon className="icon discord" />
        <span className="button-label">
          <span className="small">Join the</span>
          <br />
          <strong>StepZen Discord</strong>
        </span>
      </span>
    </a>
  )
}
