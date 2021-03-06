/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import Context from "./given/an_empty_container";
import {MissingBindingForService} from "doLittle/DependencyInversion/MissingBindingForService";

describe("wen getting unbound service", () => {
    const service = "Some service";
    let context = null;
    let exception = null;

    beforeEach(() => {
        context = new Context();
        (becauseOf => {try { context.container.get(service); } catch(e) { exception = e; }})();
    });

    it("should throw missing binding for service", () => exception.should.be.instanceof(MissingBindingForService));
});