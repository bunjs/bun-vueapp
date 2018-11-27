class Services_Page_ExampleHomeShow extends bun.vueapp{
    constructor() {
        super();
    }
    execute(bsCommon = {}) {
        let data = new this.Services_Data_ApiData().getData(bsCommon);
        return {
            home: data
        };
    }
}

module.exports = Services_Page_ExampleHomeShow;