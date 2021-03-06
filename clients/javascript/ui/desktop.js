/**
 * @author    Ian Paterson
 * @namespace boto_web.ui.desktop
 */

/**
 * Sets up the desktop area which manages dynamic content.
 */
boto_web.ui.Desktop = function() {
	var self = this;

	self.node = $('#botoweb');

	/**
	 * Holds references to paging history to allow simple page navigation.
	 */
	self.pages = {};

	self.num_pages = 0;

	/**
	 * Shows the specified page and hides all others. Triggers appropriate
	 * actions on each page.
	 */
	self.activate = function(page) {
		//TODO Trigger appropriate actions on pages.
		for (var i in self.pages) {
			if (self.pages[i].node) {
				self.pages[i].node.remove();
				delete self.pages[i];
			}
		}

		if (!self.pages[page.id]) {
			self.pages[page.id] = page;
			self.num_pages++;
		} else {
			page = self.pages[page.id]
		}

		self.node.append(page.node);

		page.node.show();
	}
};
