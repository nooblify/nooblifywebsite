import React, { Component } from 'react'
import content from '../content/projects.md';
import Layout from '../components/MyLayout.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
  render() {
    let { html , attributes:{ title, projects } } = content;
    return (
      <Layout>
        <div className="container mx-auto">
          <section>
            <div className="md:flex md:items-center">
              <div className="md:flex-1 flex my-4 items-center flex-wrap">
                <div className="w-full md:w-1/3">
                  <img className="w-1/3 mx-auto mb-4 md:w-full" src="/calendar.svg" />
                </div>
                <div
                  className="w-full md:w-1/3 text-2xl md:text-4xl md:uppercase text-center font-bold text-noob-dark font-noobheading px-8"
                >
                  Projects
                </div>
              </div>
              <div className="md:flex-1 flex text-center rounded-lg shadow-2xl bg-white">
                <div className="flex-1">
                  <div className="p-4">
                    <p className="font-bold text-noob-dark text-3xl md:text-5xl">1</p>
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
                    <p className="font-bold text-noob-dark text-3xl md:text-5xl">0</p>
                    <p className="text-noob-dark">
                    <i
                        className="px-2 text-sm text-red-600 block lg:inline"
                      ><FontAwesomeIcon icon={faDotCircle} />
                      </i>
                      Updates Required
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="p-4">
                    <p className="font-bold text-noob-dark text-3xl md:text-5xl">0</p>
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
            <h2 class="font-semibold text-4xl text-noob-dark font-noobheading my-6 mx-2">Projects</h2>
            <div class="flex flex-wrap text-noob-dark">
              { projects.map((project, k) => (
                <div class="flex w-full lg:w-1/3 py-2 lg:p-2" key={k}>
                  <div class="flex flex-col w-full bg-white rounded-lg px-4 py-6 shadow-2xl">
                    <p class="py-2">
                      <span class="text-blue-600 bg-blue-100 mx-2 px-2 py-1 font-bold rounded uppercase text-sm">{project.status}</span>
                    </p>
                    <h3 class="text-2xl font-semibold font-noobheading ml-3 py-2">
                      {project.name}
                    </h3>
                    <p class="ml-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
              {/* { projects.map((project, k) => (
                <li key={k}>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <p>{project.status}</p>
                </li>
              ))} */}
          </section>
        </div>
      </Layout>
    )
  }
}