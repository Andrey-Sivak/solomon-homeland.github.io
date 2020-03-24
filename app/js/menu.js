class MobMenu {

	constructor(options) {
		this.btn = document.getElementById(options.btn);
		this.menuContent = document.getElementById(options.menuContent);
	}

	toggleMenu() {
		const self = this;
		this.btn.addEventListener('click', function() {
			this.classList.toggle('active');
			if(this.classList.contains('active')) {
				self.menuContent.classList.add('header_menu-active');
			} else {
				self.menuContent.classList.remove('header_menu-active');
			}
		})
	}

	init() {
		this.toggleMenu();
	}
}

export { MobMenu };
