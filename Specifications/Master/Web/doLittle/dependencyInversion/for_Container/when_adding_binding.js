/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import Context from "./given/an_empty_container";
import {Binding} from "doLittle/dependencyInversion/Binding";

describe("when adding a binding", () => {
    let context = null;
    let binding = null;

    beforeEach(() => {
        context = new Context();
        binding = new Binding("service", "strategy", "scope");

        (becauseOf => {
            context.container.add(binding);
        })();
    });

    it("should hold the added binding", () => context.container.bindings.should.contain(binding));
});