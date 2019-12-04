import React, { Component } from 'react'
import content from '../content/projects.md';
import Layout from '../components/MyLayout.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
  render() {
    let { html , attributes:{ title, projects } } = content;
    this.State = { status: 'inProgress' }
    return (
      <Layout>
        <div className="container mx-auto text-noobdark-500">
          <section>
            <div className="md:flex md:items-center">
              <div className="md:flex-1 flex my-4 items-center flex-wrap">
                <div className="w-full md:w-1/3">
                  <img className="w-1/3 mx-auto mb-4 md:w-full" src="/calendar.svg" />
                </div>
              </div>
              <div className="md:flex-1 flex text-center rounded-lg shadow-2xl bg-white">
                <div className="flex-1">
                  <div className="p-4">
                    <p className="font-bold text-3xl md:text-5xl">1</p>
                    <p className="text-noob-dark">
                      <i
                        className="px-2 text-sm text-blue-600 block lg:inline"
                      ><FontAwesomeIcon icon={faDotCircle} /></i>
                      In progress
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="p-4">
                    <p className="font-bold text-3xl md:text-5xl">0</p>
                    <p className="text-noob-dark">
                    <i
                        className="px-2 text-sm text-red-600 block lg:inline"
                      ><FontAwesomeIcon icon={faDotCircle} />
                      </i>
                      Update Required
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="p-4">
                    <p className="font-bold text-3xl md:text-5xl">0</p>
                    <p className="text-noob-dark">
                      <i
                        className="px-2 text-sm text-green-600 block lg:inline"
                      ><FontAwesomeIcon icon={faDotCircle} />
                      </i>
                      Done
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="font-semibold text-4xl text-noobdark-500 font-heading my-6 mx-2">Projects</h2>
            <div className="flex flex-wrap text-noobdark-500 mb-10">
              { projects.map((project, k) => (
                <div className="flex w-full lg:w-1/3 py-2 lg:p-2" key={k}>
                  <div className="flex flex-col w-full bg-white rounded-lg px-4 py-6 shadow-2xl">
                    <p className="py-2">
                      <span className={"mx-2 px-2 py-1 font-bold rounded uppercase text-sm " + ((project.status == 'In Progress') ? ' text-blue-600 bg-blue-100' : '') + ((project.status == 'Update Required') ? ' text-red-600 bg-red-200' : '') + ((project.status == 'Finished') ? ' text-green-600 bg-green-200' : '')}>{project.status}</span>
                    </p>
                    <h3 className="font-semibold ml-3 py-2 text-lg">
                      {project.name}
                    </h3>
                    <p className="ml-3 text-lg text-noobdark-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section class="text-center">
            <span class="text-noobdark-300 font-light font-heading px-1">Built with</span>
            <img class="h-10 inline px-1" alt="NextJS" src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"/>
            <img class="h-6 inline px-1" alt="TailwindCSS" src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"/>
            <img class="h-10 inline px-1" alt="ManyPixels" src="https://ph-files.imgix.net/eed70b87-5ec1-47e0-a877-6a7967f1e0ec?auto=format"/>
          </section>
        </div>
      </Layout>
    )
  }
}