module.exports = {
    beforeEach: browser => {
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html')
    },
    after: browser => {
        browser
            .end()
    },
    'Our test using an object': browser => {
        var DJRoomba = {
            name: 'Bruce Wayne',
            title: 'Vigilante',
            oldName: 'Bernice Ortiz',
            oldTitle: 'CEO'
        }
        browser
            .click('li[name="employee1"]')
            .expect.element('#employeeTitle').text.equal(DJRoomba.oldName)
        browser
            .verify.value('input[name="titleEntry"]', DJRoomba.oldTitle)
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', DJRoomba.name)
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', DJRoomba.title)
            .click('#saveBtn')
            .verify.value('input[name="nameEntry"]', DJRoomba.name)
            .verify.value('input[name="titleEntry"]', DJRoomba.title)
            .expect.element('#employeeTitle').text.equal(DJRoomba.name)
    }
}