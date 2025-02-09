import type { MetaFunction } from '@remix-run/node';
import { BasicPage } from '@/components/BasicPage';
import cl from '#/index.module.scss';
import { skills } from '@/common/constants/skills';

export const meta: MetaFunction = () => {
  return [{ title: 'Terminaate' }];
};

export default function Index() {
  return (
    <BasicPage className={cl.page}>
      <section className={cl.sectionContainer}>
        <h3 className={cl.title}>
          <span>About:</span>
        </h3>
        <span className={cl.text}>
          <p>
            Hey! I'm a young web developer from <span>Russia</span> who loves
            building and designing for the web.
          </p>
          <p style={{ marginTop: '5px' }}>
            I specialize in <span>React</span> and <span>Next.js</span>,
            focusing on creating modular, efficient, and visually appealing
            projects.
          </p>
          <p style={{ marginTop: '5px' }}>
            I also have a growing interest in <span>DevOps</span> and{' '}
            <span>backend</span> development, exploring how everything connects
            behind the scenes. I enjoy crafting web applications that are not
            just functional but also well-designed and user-friendly.
          </p>
        </span>
      </section>

      <section className={cl.sectionContainer}>
        <h3 className={cl.title}>
          <span>Skills:</span>
        </h3>
        <div className={cl.skillsContainer}>
          <div className={cl.skills}>
            {Object.entries(skills).map(
              ([categoryName, categorySkills], categoryIndex) => (
                <div key={categoryIndex} className={cl.skillsCategoryContainer}>
                  <span className={cl.skillsCategoryName}>{categoryName}</span>
                  <div className={cl.categorySkills}>
                    {categorySkills.map(
                      ({ name, icon: SkillIcon }, skillIndex) => (
                        <SkillIcon
                          size={25}
                          aria-label={name}
                          key={skillIndex}
                        />
                      ),
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className={cl.sectionContainer}>
        <h3 className={cl.title}>
          <span>Tools:</span>
        </h3>
        <span className={cl.text}>
          I'm primary using <code>`Lenovo Ideapad Gaming 3 15ARH05`</code> and{' '}
          <code>`Windows 11 (ReviOS)`</code> as my work setup, i also have my
          own home server that based on my old phone{' '}
          <code>`Samsung galaxy A50`</code>
        </span>
      </section>

      <section className={cl.sectionContainer}>
        <h3 className={cl.title}>
          <span>Latest project: </span>
        </h3>
        <div className={cl.latestProjectContainer}>
          {/*<ProjectCard project={projects[0]} />*/}
        </div>
      </section>
    </BasicPage>
  );
}
