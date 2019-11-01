new Vue({
    el: '#tabs',
    data: { activetab: 1 },
});

Vue.component("carousel", {
  template: "#v-carousel",
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,
      items: [
        { name: "Powder Foundation Bundle ARTISTRY EXACT FIT™", tag: "220.10TL", imgSrc: "assets/img/products/1.jpeg", link: "https://www.amway.com.tr/en/product/259921,powder-foundation-bundle-ochre-artistry-exact-fit" },
        { name: "Power Duo ARTISTRY™ Intensive Skincare", tag: "679.30 TL", imgSrc: "assets/img/products/2.jpeg", link: "https://www.amway.com.tr/en/product/119522,power-duo-artistry-intensive-skincare" },
	{ name: "Water Treatment System unit with Diverter Kit for existing tap(above counter Installation) eSpring™", tag: "4,549.50 TL", imgSrc: "assets/img/products/3.jpeg", link: "https://www.amway.com.tr/en/product/100188,water-treatment-system-unit-with-diverter-kit-for-existing-tap-above-counter-installation-espring" },
	{ name: "Basic Set iCook™", tag: "2,181.80 TL", imgSrc: "assets/img/products/4.jpeg", link: "https://www.amway.com.tr/en/product/101095,basic-set-icook" },
	{ name: "Black Concentrated Liquid Laundry Detergent for Dark Clothes AMWAY HOME™ SA8™", tag: "97.20 TL", imgSrc: "assets/img/products/5.jpeg", link: "https://www.amway.com.tr/en/product/250508,black-concentrated-liquid-laundry-detergent-for-dark-clothes-amway-home-sa8" },
	{ name: "Soft Cleanser AMWAY HOME™ L.O.C.™ ", tag: "34.80 TL", imgSrc: "assets/img/products/6.jpeg", link: "https://www.amway.com.tr/en/product/110486,soft-cleanser-amway-home-l-o-c" },
	{ name: "Automatic Dishwasher Tablets AMWAY HOME™ DISH DROPS™", tag: "98.70 TL", imgSrc: "assets/img/products/7.jpeg", link: "https://www.amway.com.tr/en/product/109867,automatic-dishwasher-tablets-amway-home-dish-drops" }
      ]
    };
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    }
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
	trimName(name){
		return name.substring(0,20) + "...";
	}
  }
});

$('#trigger-top-login-modal').click(function(){
    $('#top-login-overlay, #top-login-modal').show();
	});

	$('#top-login-overlay, #top-login-modal span').click(function(){
		$('#top-login-overlay, #top-login-modal').hide();
	});

new Vue({
  el: "#app"
});

