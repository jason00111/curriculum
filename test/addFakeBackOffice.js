const fakeUsers = [
  { id: '06f211e3-bd02-4fbd-b977-dc5e769ad092',
    active: true,
    email: 'learner1@gmail.com',
    emails: [ 'learner1@gmail.com' ],
    handle: 'learner1',
    profileUrl: 'https://github.com/learner1',
    avatarUrl: 'http://idm.learnersguild.dev/avatars/06f211e3-bd02-4fbd-b977-dc5e769ad092.jpg',
    name: 'Learner 1',
    phone: '+15555555555',
    dateOfBirth: '1992-04-29T00:00:00.000Z',
    timezone: 'UTC',
    roles: [ 'learner' ],
    createdAt: '2017-04-03T18:48:32.855Z',
    updatedAt: '2017-07-06T03:33:28.746Z',
    echoProfileURL: 'https://echo.learnersguild.org/users/learner1',
    githubURL: 'https://github.com/learner1',
    slackDirectMessageURL: 'https://learnersguild.slack.com/messages/@learner1',
    phase: 1 },
  { id: '113ae73d-0223-478e-9da4-78537e63417a',
    active: true,
    email: 'learner2@gmail.com',
    emails: [ 'learner2@gmail.com' ],
    handle: 'learner2',
    profileUrl: 'https://github.com/learner2',
    avatarUrl: 'http://idm.learnersguild.dev/avatars/113ae73d-0223-478e-9da4-78537e63417a.jpg',
    name: 'Learner 2',
    phone: '+15555555555',
    dateOfBirth: '1992-07-20T00:00:00.000Z',
    timezone: 'America/Los_Angeles',
    roles: [ 'learner' ],
    createdAt: '2017-02-27T18:40:53.936Z',
    updatedAt: '2017-06-29T15:16:47.321Z',
    echoProfileURL: 'https://echo.learnersguild.org/users/learner2',
    githubURL: 'https://github.com/learner2',
    slackDirectMessageURL: 'https://learnersguild.slack.com/messages/@learner2',
    phase: 2 },
]

module.exports = (request, response, next) => {
  request.backOffice = {
    getAllUsers: () => Promise.resolve(fakeUsers),
    getUserByHandle: handle =>
      Promise.resolve(fakeUsers.find(user => user.handle === handle)),
  }
  next()
}
