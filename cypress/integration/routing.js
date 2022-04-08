describe("test navigation", () => {
    it("should open me tab on visit", () => {
        cy.visit("/")
        cy.location().should((loc) => {
            expect(loc.hash).to.equal('#/');
        });
    })

    it("should visit me tab", () => {
        cy.visit("/")
        cy.contains('a', 'Me').click()
        cy.location().should((loc) => {
            expect(loc.hash).to.equal('#/');
        });
        cy.get('[class="ll-about"]').should('be.visible')
    })

    it("should visit CV", () => {
        if (Cypress.browser.isHeaded === true) {
            cy.visit("/")
            cy.contains('a', 'CV').invoke('removeAttr', 'target').click()
            cy.url().should('eq', 'https://lukaszlapaj.github.io/CV/Lukasz_Lapaj_CV.pdf')
        }
    })

    it("should visit projects tab", () => {
        cy.visit("/")
        cy.contains('a', 'Projects').click()
        cy.location().should((loc) => {
            expect(loc.hash.toString()).to.contain('/projects');
        });
        cy.get('[class="ll-projects"]').should('be.visible')
        cy.get('[class="ll-projects"]').contains("Projects")
    })

    it("should visit technologies tab", () => {
        cy.visit("/")
        cy.contains('a', 'Technologies').click()
        cy.location().should((loc) => {
            expect(loc.hash.toString()).to.contain('/technologies');
        });
        cy.get('[class="ll-technologies"]').should('be.visible')
        cy.get('[class="ll-technologies"]').contains("Technologies")
    })

    it("should visit linkedin", () => {
        cy.visit("/")
        cy.get('[alt="LI"]').parent().invoke('removeAttr', 'target').click()
        cy.location().should((loc) => {
            expect(loc.origin.toString()).to.contain('linkedin');
        });
    })

    it("should visit github", () => {
        cy.visit("/")
        cy.get('[alt="GH"]').parent().invoke('removeAttr', 'target').click()
        cy.location().should((loc) => {
            expect(loc.origin.toString()).to.contain('github');
        });
    })

    it("should visit facebook", () => {
        cy.visit("/")
        cy.get('[alt="FB"]').parent().invoke('removeAttr', 'target').click()
        cy.location().should((loc) => {
            expect(loc.origin.toString()).to.contain('facebook');
        });
    })

    it("should visit instagram", () => {
        cy.visit("/")
        cy.get('[alt="IG"]').parent().invoke('removeAttr', 'target').click()
        cy.location().should((loc) => {
            expect(loc.origin.toString()).to.contain('instagram');
        });
    })
})