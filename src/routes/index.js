/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from '../components/App';

// Child routes
import home from './home';
import login from './login';
import error from './error';
// added new routes
import databaseView from './dashboardPages/databaseView';
import databaseChangelog from './dashboardPages/databaseChangelog';
import peerPendingReview from './dashboardPages/peerPendingReview';
import peerSubmittedReview from './dashboardPages/peerSubmittedReview';
import processPending from './dashboardPages/processPending';
import processHold from './dashboardPages/processHold';
import processRunning from './dashboardPages/processRunning';
import processSuccessful from './dashboardPages/processSuccessful';
import processFailed from './dashboardPages/processFailed';
import processSearch from './dashboardPages/processSearch';
import account from './dashboardPages/account';
import review from './dashboardPages/review';

import Header from '../components/Header';

export default [

  {
    path: '/',
    children: [
      login,
    ],
    async action({ next, render, context }) {
      const component = await next();
      if (component === undefined) return component;
      return render(
        <App context={context}>{component}</App>
      );
    },
  },


  {
    path: '/app',

  // keep in mind, routes are evaluated in order
    children: [
      home,
      // contact,
      databaseView,
      databaseChangelog,
      peerPendingReview,
      peerSubmittedReview,
      review,
      processPending,
      processHold,
      processRunning,
      processSuccessful,
      processFailed,
      processSearch,
      account,

      // place new routes before...
      // content,
      error,
    ],

    async action({ next, render, context }) {
      // console.log('inside dashboard');
      const component = await next();
      // console.log('inside dasdboard component', component);
      if (component === undefined) return component;
      return render(
        <div>
          <Header />
          <div id="page-wrapper" className="page-wrapper">
            <App context={context}>{component}</App>
          </div>
        </div>
      );
    },
  },
  {
    path: '/error',
    children: [
      error,
    ],
    async action({ next, render, context }) {
      // console.log('inside error');
      const component = await next();
      // console.log('inside error with component', component);
      if (component === undefined) return component;
      return render(
        <App context={context}>{component}</App>
      );
    },
  },
];
