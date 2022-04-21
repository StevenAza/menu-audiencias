import { Component, h } from "@stencil/core";

@Component({
  tag: 'menu-social',
  styleUrl: 'menu-social.scss',
  shadow: true,
})

export class MenuSocial {
  menuSocial = [
    {
      name: 'Facebook',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
      src: 'https://www.youtube.com/watch?v=iD2hqWbcE_M&ab_channel=solvetic.com'
    },
    {
      name: 'Twitter',
      icon: 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png',
      src: 'https://www.youtube.com/watch?v=iD2hqWbcE_M&ab_channel=solvetic.com'
    },
    {
      name: 'Youtube',
      icon: 'https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png',
      src: 'https://www.youtube.com/watch?v=iD2hqWbcE_M&ab_channel=solvetic.com'
    },
    {
      name: 'Instagram',
      icon: 'https://cdn-icons-png.flaticon.com/512/87/87390.png',
      src: 'https://www.youtube.com/watch?v=iD2hqWbcE_M&ab_channel=solvetic.com'
    }
  ]
  render() {
    return (
      <div>
        <ul class="menu-social">
            {
              this.menuSocial.map((item) => 
                <li class="menu-social__item">
                  <a href={item.src}><img src={item.icon} alt={item.name}/></a>
                </li>
              )}
        </ul>
      </div>
    );
  }
}