export interface Menu {
    header: String,
    menuName: String,
    menuLink: String,
    menuIcon: String,
    hasSubMenu: Boolean,
    submenus: Array<Menu>,
  }